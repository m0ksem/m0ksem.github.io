import { Color, Fog, Scene, ShaderMaterial, Vector3 } from 'three'

const vertexSource = `precision mediump float;
precision mediump int;

varying vec3 vPosition;
varying vec4 vWorldPosition;

void main()	{
  vec4 mvPosition = vec4( position, 1.0 );
  mvPosition = instanceMatrix * mvPosition;
  vPosition = vec3(modelMatrix * mvPosition);
  vWorldPosition = modelMatrix * mvPosition;

  gl_Position = projectionMatrix * modelViewMatrix * mvPosition;
}
`


const fragmentSource = `precision mediump float;
precision mediump int;

uniform float time;

uniform vec3 fogColor;
uniform float fogNear;
uniform float fogFar;

varying vec3 vPosition;
varying vec4 vWorldPosition;

void main()	{
  vec3 color = vec3(0.5);
  color.r += sin( time ) * 0.3;
  color.b += cos( time ) * 0.7;

  gl_FragColor = vec4(color, 1.0);

  #ifdef USE_FOG
    float fogWorldFactor = clamp((vWorldPosition.y + 10.0) / 20.0, 0.0, 1.0);
    gl_FragColor.rgb = mix(fogColor, gl_FragColor.rgb, fogWorldFactor);

    // 1000 fog far looks good here
    float fogFactor = smoothstep(fogNear, fogFar, (vPosition.z + 1000.0));
    float xFogFactor = smoothstep(fogNear, fogFar, abs(vPosition.x + 300.0));
    gl_FragColor.rgb = mix(fogColor, gl_FragColor.rgb, fogFactor);
    // gl_FragColor.rgb = mix(fogColor, gl_FragColor.rgb, xFogFactor);
  #endif
  // gl_FragColor.rgba *= 0.5;
}
`

export const createMaterial = (color: string, scene: Scene) => new ShaderMaterial({
  uniforms: {
    'time':      { value:  new Vector3().fromArray(new Color(color).toArray()) },
    fogColor:    { value: scene.fog?.color },
    fogNear:     { value: (scene.fog as Fog)?.near },
    fogFar:      { value: (scene.fog as Fog)?.far },
    lights:      { value: true },
  },
  vertexShader: vertexSource,
  fragmentShader: fragmentSource,
  fog: true,
  transparent: true,
})
