import { useQuery } from "react-query";
import { APIKEY, getReq } from "../Base/base";

export const useGetSearchedVideos = (search) => {
  return useQuery(
    ["useGetSearchVideo"],
    async (search) => {
      const response = getReq(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=trending&maxResults=25&key=${APIKEY}`
      );
      const result = await (await response).json();

      console.log(result, "RESULT");

      return result;
    },
    {
      onSuccess: (data) => {
        console.log(data, "RESULTGET");
      },
    }
  );
};
