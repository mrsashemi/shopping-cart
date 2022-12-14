import { SimpleBackground } from "../../components/backgrounds/background";
import { BlogPageBody } from "../../components/blog-body/blogbody";
import { TopNavBar } from "../../components/top-nav-bar/topbar";
import './stylesheet/blogpage.css'

export function BlogPage() {
    return (
        <div>
            <SimpleBackground />
            <div id="blogPageContainer">
                <TopNavBar />
                <BlogPageBody />
            </div>
        </div>
    )
}