const os = require('os');
const { b2gb, n2pn } = require('../utils');

const INFO = [
    {
        id: 'platform',
        label: '平台操作系统名称',
        value: os.platform()
    },
    {
        id: 'type',
        label: '平台操作系统系列名称',
        value: os.type()
    },
    {
        id: 'version',
        label: '平台操作系统内核版本',
        value: os.version()
    },
    {
        id: 'release',
        label: '平台操作系统发行版本',
        value: os.release()
    },
    {
        id: 'arch',
        label: '平台系统CPU架构',
        value: os.arch()
    },
    {
        id: 'cores',
        label: '平台系统逻辑CPU核数',
        value: os.cpus().length
    },
    {
        id: 'cpus',
        label: '平台系统逻辑CPU详情',
        value: os.cpus().map(m => m.model).join('，')
    },
    {
        id: 'totalmem',
        label: '平台系统内存总量',
        value: `${b2gb(os.totalmem()).toFixed(2)}GB`
    },
    {
        id: 'freemem',
        label: '平台系统空闲内存量',
        value: `${b2gb(os.freemem()).toFixed(2)}GB`
    },
    {
        id: 'freemem',
        label: '平台系统空闲内存使用率',
        value: `${n2pn(os.freemem(), os.totalmem()).toFixed(2)}%`
    },
];

class PlatformInfoPlugin {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        compiler.hooks.emit.tapAsync('PlatformInfoPlugin', function(compilation, callback) {
            // console.log('processAssets', compilation.hooks.processAssets)
            compilation.assets['Platform.txt'] = {
                source: function() {
                    const title = `平台系统信息${os.EOL}${os.EOL}`
                    const content = INFO.map(m => `${m.label}：${m.value}`).join(os.EOL);
                    console.log(title + content)
                    return title + content
                }
            }
            callback()
        })
    }
}

module.exports = PlatformInfoPlugin;