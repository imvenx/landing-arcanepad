interface AConfig {
    arcaneApiBaseUrl: string
    ssoBaseUrl: string
}

const devConfig: AConfig = {
    arcaneApiBaseUrl: 'http://localhost:5000',
    ssoBaseUrl: 'http://192.168.0.35:9090',
}

const prodConfig: AConfig = {
    arcaneApiBaseUrl: 'https://api.arcanepad.com',
    ssoBaseUrl: 'https://sso.arcanepad.com',
}

const configs = { development: devConfig, production: prodConfig }

export const aConfig = configs[process.env.NODE_ENV as 'development' | 'production']