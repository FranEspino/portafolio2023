import Link from 'next/link';
import Button from "@material-ui/core/Button";
const CardPost = ({content}) => {

    return (
      <div className="card_post" key={content.id}>
            <img className="image_post" src={content.img }  width={150}  alt={content.title} />
            <div className="content_post">
            <h1 className="text_title_post">{content.title  } </h1>
            <p className="InfoTextBanner">{content.description }</p>
            <Link href={`/${content.slug}`} >
            <Button variant="outlined" color="primary" style={{ backgroundColor:"#5046E5 ", color: '#fff',borderRadius: 10, fontSize: 12, fontWeight: 'bold', marginTop: '1em' , borderColor:'#fff', borderWidth: 1}}>
                Leer Post
            </Button>
            </Link>
            </div>
      </div>
    )
}

export default CardPost;
