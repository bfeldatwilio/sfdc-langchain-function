/**
 * Describe Langchainfunction here.
 *
 * The exported method is the entry point for your code when the function is invoked.
 *
 * Following parameters are pre-configured and provided to your function on execution:
 * @param event: represents the data associated with the occurrence of an event, and
 *                 supporting metadata about the source of that occurrence.
 * @param context: represents the connection to Functions and your Salesforce org.
 * @param logger: logging handler used to capture application logs and trace specifically
 *                 to a given execution of a function.
 */
export default async function (event, context, logger) {

  const orgInfo = {
    id: context.org.id,
    apiVersion: context.org.apiVersion,
    baseUrl: context.org.baseUrl,
    domainUrl: context.org.domainUrl
}
logger.info(JSON.stringify(orgInfo));

  return orgInfo;
}
