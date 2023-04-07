import { terser } from 'rollup-plugin-terser';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'index.js',
  output: {
    file: 'dist/bundle.min.cjs',
    format: 'iife',
  },
  plugins: [terser(), uglify()],
};