//01. CORS: If I visit TheMafia.org, I probably won't like its scripts being able to make a request to MyBank.com. For this reason, browsers protect us by disallowing scripts to make HTTP requests to other domains. It's called browsers having a "strict CORS-Policy", i.e., "Cross-Origin Resource Sharing Policy".

//But this can be an annoying problem when building systems that want to access several domains for legitimate reasons. Fortunately, servers can include a header like this in their response to explicitly indicate to the browser that it is okay for the request to come from another domain:
/*
    Access-Control-Allow-Origin: *
                OR
    Access-Control-Allow-Origin: https://example.com
*/