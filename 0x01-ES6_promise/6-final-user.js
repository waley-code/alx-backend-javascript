import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export function handleProfileSignup(firstName, lastName, fileName) {
    const promises = [uploadPhoto(fileName), createUser(firstName, lastName)];
  
    return Promise.allSettled(promises).then((results) =>
      results.map((result) => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason,
      }))
    );
  }