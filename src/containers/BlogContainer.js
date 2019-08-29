import React from 'react';
import BlogCard from '../components/BlogCard'
import Grid from "@material-ui/core/Grid";



const BlogContainer = (props) => {
    console.log("Were are console logging props", props.mediumPosts)

    var status = props.mediumPosts.status;
    if (status ==='ok'){
        var items = props.mediumPosts.items;
    }
    console.log(items)


    if(status==='ok'){
        return(
            <section>
                <div className="content-section-heading text-center" id="blog">
                    <h3 className="text-secondary mb-0">Articles</h3>
                    <h2 className="mb-5">What Articles have I Written?</h2>
                </div>
                <section className="blog"  >
                    <Grid className="blog-grid" container justify="center" spacing={6}>
                        {
                            items.map( (item) =>  (
                                
                                    < BlogCard 
                                link={item.link}
                                thumbnail={item.thumbnail}
                                title={item.title}
                                description={item.description}
                                author={item.author}
                                date={item.pubDate}
                                key={item.title}
                                />
                            
                            )  
                        )} 
                        </Grid>
                </section>
            </section>
        )
    }
    else{
        return(
            null
        )
    }
    
}
export default BlogContainer;

// Grid className='blogcontainer-body' id="blogcontainer" container spacing={24}