import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.Credentials({
      id: "form-login",
      name: "Login",
      credentials: {},
      async authorize(token) {
        try {
        } catch (error) {
          console.log(error.message);
        }
      },
    }),
    Providers.Google({
      clientId: process.env.NEXTAUTH_GOOGLE_ID,
      clientSecret: process.env.NEXTAUTH_GOOGLE_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.NEXTAUTH_FACEBOOK_ID,
      clientSecret: process.env.NEXTAUTH_FACEBOOK_SECRET,
    }),
  ],
  database: process.env.NEXTAUTH_DATABASE_URL,
  session: {
    jwt: true,
  },
  callbacks: {
    async signIn(user, account, profile) {
      let isAllowedToSignIn = true;

      return isAllowedToSignIn;
    },
    async redirect(url, baseUrl) {
      return url;
    },
    session: async (session, user) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        session.user = user;
      }
      return Promise.resolve(session);
    },
    jwt: async (token, user, account, profile, isNewUser) => {
      const isSignIn = user ? true : false;
      return Promise.resolve(token);
    },
  },
  debug: true,
};

const Auth = (req, res) => NextAuth(req, res, options);

export default Auth;
