import Auth from "@aws-amplify/auth"

export const handleGetQR = async () => {
    const currentUser = await Auth.currentAuthenticatedUser();
}