import { handleSendCustomChallengeAnswer } from "./SendCustomChallengeAnswer"
import { handleSignInAmplify, type SignInAmplifyProps } from "./SignInAmplify"

// ESTO ES SI EN CASO QUIERES HACERLO COMO AMPLIFY 6
export const handleLoginComplete = async ({password,recaptcha,username}:SignInAmplifyProps) => {
    await handleSignInAmplify({username, password, recaptcha})
    await handleSendCustomChallengeAnswer(username)
}