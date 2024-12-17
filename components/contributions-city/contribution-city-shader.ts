import { Color, Fog, Scene, ShaderMaterial, Vector3 } from 'three'

const vertexSource = `precision mediump float;
precision mediump int;

varying vec3 vInstanceColor;
varying vec3 vPosition;
varying vec4 vWorldPosition;

void main()	{
  vPosition = position;
  vec4 mvPosition = vec4( position, 1.0 );
  mvPosition = instanceMatrix * mvPosition;
  vInstanceColor = instanceColor;
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
varying vec3 vInstanceColor;

void main()	{

  vec3 c = vInstanceColor;
  c.r += sin( time ) * 0.3;
  c.b += cos( time ) * 0.7;

  gl_FragColor = vec4(c, 1.0);

  #ifdef USE_FOG
    float fogWorldFactor = clamp((vWorldPosition.y) / 20.0, 0.0, 1.0);
    gl_FragColor.rgb = mix(fogColor, gl_FragColor.rgb, fogWorldFactor);
  #endif
}
`
export const createMaterial = (color: string, scene: Scene) => new ShaderMaterial({
  uniforms: {
    'time': { value: 1.0 },
    'color': { value:  new Vector3().fromArray(new Color(color).toArray()) },
    fogColor:    { value: scene.fog?.color },
    fogNear:     { value: (scene.fog as Fog)?.near },
    fogFar:      { value: (scene.fog as Fog)?.far }
  },
  vertexShader: vertexSource,
  fragmentShader: fragmentSource,
  fog: true,
  transparent: true,
})

