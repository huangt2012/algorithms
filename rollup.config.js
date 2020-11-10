import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'path'
const babel = require('rollup-plugin-babel')
const uglify = require('rollup-plugin-uglify')
const merge = require('lodash.merge')
const pkg = require('./package.json')

const extensions = ['.js', '.ts']
const resolve = function(...args) {
    return path.resolve(__dirname, ...args)
}

const jobs = {
    esm: {
        output: {
            format: 'esm',
            file: resolve(pkg.main.replace(/(.\w+)$/, '.esm$1')),
        }
    },
    umd: {
        output: {
            format: 'umd',
            file: resolve(pkg.main.replace(/(.\w+)$/, '.umd$1')),
            name: 'rem'
        }
    },
    min: {
        output: {
            format: 'umd',
            file: resolve(pkg.main.replace(/(.\w+)$/, '.min$1')),
            name: 'rem'
        }
    }
}

const mergeConfig = jobs[process.env.FORMAT || 'esm'] // 从环境变量获取打包特征

module.exports = merge(
    {
        input: resolve('./src/index.ts'),
        output: {},
        plugins: [
            nodeResolve({
                extensions,
                modulesOnly: true
            }),
            babel({
                exclude: 'node_modules/**',
                extensions
            })
        ]
    },
    mergeConfig
)