import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";


export const ProductCard = ({title,content,image})=>{


    return (
        <>
            <Card >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300px"
                        image={process.env.PUBLIC_URL + image}
                        alt="product"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {content}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </>
    )
}