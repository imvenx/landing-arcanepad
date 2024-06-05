class AConfig {
    arcaneApiBaseUrl?: string
}

const devConfig:AConfig = {
    arcaneApiBaseUrl: 'http://localhost:5000'
}

const prodConfig:AConfig = {
    arcaneApiBaseUrl: 'https://api.arcanepad.com'
}

const configs = {development: devConfig, production: prodConfig}

export const aConfig = configs[process.env.NODE_ENV as 'development' | 'production']