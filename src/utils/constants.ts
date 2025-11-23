export const COOKIES = {
    IS_LOGGED: {
        NAME: "isLogged",
        EXPIRATION: 60,
        VALUE: "true",
    },
    ACCESS_TOKEN: {
        NAME: "access_token",
        EXPIRATION: 60,
    },
};

const API_BASE_PATHS = {
    APPOINTMENTS: '/appointment',
    INSURANCES: '/insurance',
    AUTH: '/auth'
}

export const API_PATHS = {
    APPOINTMENTS: {
        NEXT: `${API_BASE_PATHS.APPOINTMENTS}/all/next`,
        CREATE: API_BASE_PATHS.APPOINTMENTS,
        CONFIRM: (id:number) => `${API_BASE_PATHS.APPOINTMENTS}/${id}/confirm`,
        CANCEL: (id:number) => `${API_BASE_PATHS.APPOINTMENTS}/${id}/cancel`, 
    },
    INSURANCES: {
        ALL: `${API_BASE_PATHS.INSURANCES}/all`,
        CREATE: API_BASE_PATHS.INSURANCES,
        UPDATE: (id: number) => `${API_BASE_PATHS.INSURANCES}/${id}`,
        ACTIVATE: (id: number) => `${API_BASE_PATHS.INSURANCES}/${id}/activate`,
        DEACTIVATE: (id: number) => `${API_BASE_PATHS.INSURANCES}/${id}/deactivate`,
        DELETE:(id: number) => `${API_BASE_PATHS.INSURANCES}/${id}`,
    },
    AUTH: API_BASE_PATHS.AUTH
}