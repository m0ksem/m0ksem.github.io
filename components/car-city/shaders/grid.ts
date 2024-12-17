import { Color, Fog, Scene, ShaderMaterial, Vector3 } from 'three'

const vertexSource = `precision mediump float;
precision mediump int;

varying vec3 vPosition;
varying vec4 vWorldPosition;

void main()	{
  vPosition = vec3(modelViewMatrix  * vec4( position, 1.0 ));
  vWorldPosition = modelMatrix * vec4(position, 1.0);

  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`


const fragmentSource = `precision mediump float;
precision mediump int;

uniform float time;

uniform vec3 fogColor;
uniform float fogNear;
uniform float fogFar;
uniform float offset;

varying vec3 vPosition;
varying vec4 vWorldPosition;

void main()	{

  vec3 color = vec3(0.5);
  color.r += sin( time ) * 0.3;
  color.b += cos( time ) * 0.7;

  gl_FragColor = vec4(color, 1.0);

  float width = 10.0;
  float lineWidth = 1.0;
  float cellidth = 10.0 - (vPosition.z - offset) / 5.0;

  if (mod(vPosition.z - offset, cellidth) < 0.0 || mod(vPosition.x + lineWidth / 2.0, width) < lineWidth) {
    gl_FragColor.rgb = color;
  } else {
    // gl_FragColor = vec4(0.0);
    gl_FragColor = vec4(0.0, 0.0, 0.0, 0.8);
  }

  // if (vPosition.z < -100.0) {
  //   gl_FragColor = vec4(color, 0.5);
  // }

  float MAX_WIDTH = 10.0;

  if (vPosition.x > MAX_WIDTH || vPosition.x < -MAX_WIDTH) {
    gl_FragColor = vec4(0.0);
  }

  #ifdef USE_FOG
    // 1000 fog far looks good here
    float fogFactor = smoothstep(fogNear, fogFar, vPosition.z + fogFar);
    gl_FragColor.rgb = mix(fogColor, gl_FragColor.rgb, fogFactor);
  #endif
}
`

export const createMaterial = (color: string, scene: Scene) => new ShaderMaterial({
  uniforms: {
    'time':      { value:  new Vector3().fromArray(new Color(color).toArray()) },
    offset:      { value: 0 },
    fogColor:    { value: scene.fog?.color },
    fogNear:     { value: (scene.fog as Fog)?.near },
    fogFar:      { value: (scene.fog as Fog)?.far },
  },
  vertexShader: vertexSource,
  fragmentShader: fragmentSource,
  fog: true,
  transparent: true,
})
