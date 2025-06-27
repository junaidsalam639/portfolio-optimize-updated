import PageBanner from "@/components/page-banner"
import BlogCard from "@/components/blogs/blog-card"


export default function BlogsPage() {
  return (
    <div className="min-h-screen">
      <PageBanner title="BLOGS" />
      <BlogCard />
    </div>
  )
}
