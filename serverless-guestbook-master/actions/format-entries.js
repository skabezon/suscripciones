/**
 * Format the Cloudant documents to be consumed by the user interface
 */
const md5 = require('spark-md5');

function main(params) {
  return {
    entries: params.rows.map((row) => { return {
      oc: row.doc.oc,
      sender: row.doc.sender,
      rut: row.doc.rut,
      
    }})
  };
}