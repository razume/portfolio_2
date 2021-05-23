// This is what we'll use to communitcate with Sanity
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "3y7fkp1r", // can be found in ../studio/sanity.json or online at manage.sanity.io
  dataset: "production",
});
