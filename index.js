export default async function (event, context, logger) {

  const {message} = event.data;
  const orgInfo = {
    id: context.org.id,
    apiVersion: context.org.apiVersion,
    baseUrl: context.org.baseUrl,
    domainUrl: context.org.domainUrl,
    message: message
}

  return JSON.stringify(orgInfo);
}
