import sanityClient from "@sanity/client";

const options = {
    projectId: "h29mnmrq",
    dataset: "production"
};

const client = sanityClient({
    ...options,
    useCdn: process.env.NODE === 'production',
});

export default client;