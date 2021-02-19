import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/advertiser/list");
  }, []);
  return null;
};

export default Home;
