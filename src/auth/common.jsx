import axios from "axios";

const redirectLogin = () => {
  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
};

export const checkAuth = async (req, roles) => {
  let token =
    req?.cookies?.token?.toString().length > 0
      ? req?.cookies?.token?.replace("j:", "")
      : null;
  if (!token) return redirectLogin();
  try {
    const result = await axios.post(
      `${process.env.API_URL || "http://localhost:3000"}/api/user/check-token`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (roles.includes(result?.data?.role) === false)
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    return {
      props: {
        user: result?.data,
      },
    };
  } catch (error) {
    return redirectLogin();
  }
};
