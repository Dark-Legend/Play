import { useQuery } from "react-query";
import { APIKEY, getReq } from "../Base/base";

export const useGetHomeVideo = () => {
  return useQuery(
    ["GetHomeVideo"],
    async () => {
      const response = getReq(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2CliveStreamingDetails&chart=mostPopular&maxResults=25&regionCode=IN&key=${APIKEY}`
      );
      const result = await (await response).json();
      return result;
    },
    {
      refetchOnWindowFocus: false,
      refetchInterval: false,
      refetchIntervalInBackground: false,
    }
    // {
    //   select: (data) => {
    //     const result = data.map((val) => {
    //         return {
    //             video_id: data?.items.map((data) => data?.id),
    //             video_snippet: {
    //             channel_name: data?.items.map(
    //              (data) => data?.snippet?.channelTitle
    //             ),
    //              video_title: data?.items.map((data) => data?.snippet?.title),
    //             uploaded_at: data?.items.map(
    //              (data) => data?.snippet?.publishedAt
    //             ),
    //             thumbnail: data?.items.map(
    //                 (data) => data?.snippet?.thumbnails?.maxres
    //             ),
    //             video_views: data?.items.map(
    //                 (data) => data?.statistics?.viewCount
    //             ),
    //         }
    //     });

    //     console.log(result, "selected");

    //     return result;
    //   },
    // }
  );
};
