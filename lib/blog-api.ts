export type MediaType = "IMAGE" | "VIDEO";

export interface BlogMedia {
  id: string;
  fileUrl: string;
  mimeType: string;
  mediaType: MediaType;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  media: BlogMedia[];
}

export interface BlogFeedResponse {
  content: BlogPost[];
  number: number;
  size: number;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export class BlogApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
    this.name = "BlogApiError";
  }
}

const backendUrl = (process.env.BACKEND_API_URL ?? "http://localhost:8082/api/v1").replace(/\/$/, "");

async function request<T>(path: string): Promise<T> {
  const response = await fetch(`${backendUrl}${path}`, {
    cache: "no-store",
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new BlogApiError(`Blog API returned ${response.status}`, response.status);
  }

  return response.json() as Promise<T>;
}

export function getBlogPosts(page = 0, size = 7) {
  return request<BlogFeedResponse>(`/posts?page=${page}&size=${size}`);
}

export function getBlogPost(id: string) {
  return request<BlogPost>(`/posts/${encodeURIComponent(id)}`);
}
