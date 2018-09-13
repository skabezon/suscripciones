/**
 * Prepare the guestbook entry to be persisted
 */
function main(params) {
  if (!params.oc || !params.sender) {
    return Promise.reject({ error: 'no name or comment'});
  }

  return {
    doc: {
      createdAt: new Date(),
       oc: params.oc,
       sender: params.sender,
       rut: params.rut
    }
  };
}