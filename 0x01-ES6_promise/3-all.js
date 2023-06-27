import { uploadPhoto, createUser } from '../utils';

export default function handleProfileSignup() {
  createUser().then((x) => x).then((y) => {
    uploadPhoto().then((z) => {
      console.log(`${z.body}  ${y.firstName}  ${y.lastName}`);
    });
  }).catch(() => {
    console.log('Signup system offline');
  });
}
