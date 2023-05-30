import React from 'react'
import { HelmetProvider } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
export const Helmetseo = ({ titulo, description, image, url }) => {
    return (
        <HelmetProvider>
        <Helmet defer={false}>
            <title>{titulo}</title>
            <meta name="title" content={titulo} />
            <meta property="og:title" content={titulo} />
            <meta name="description" content={description} />
            <link rel="icon" type="image/png" href="https://res.cloudinary.com/frapoteam/image/upload/v1639420834/f_cpqlrh.png" />
            <meta property="og:image" content={image} />
            <meta property="og:image:secure_url" content={image} />
            <meta property="og:url" content={url} />
        </Helmet>
        </HelmetProvider>

    )
}

