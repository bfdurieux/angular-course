export interface IWikipediaResponse {
  query: {
    search: {
      title: string,
      snippet: string,
      pageid: number
    }
  }[];
}
