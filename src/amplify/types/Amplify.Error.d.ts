export type AmplifyError = {
    message: {
        code: string;
        message: string;
    };
    details: string;
}