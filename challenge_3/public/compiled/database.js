const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});

const insertDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }], function (err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2RhdGFiYXNlLmpzIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwicmVxdWlyZSIsImFzc2VydCIsInVybCIsImRiTmFtZSIsImNvbm5lY3QiLCJlcnIiLCJjbGllbnQiLCJlcXVhbCIsImNvbnNvbGUiLCJsb2ciLCJkYiIsImNsb3NlIiwiaW5zZXJ0RG9jdW1lbnRzIiwiY2FsbGJhY2siLCJjb2xsZWN0aW9uIiwiaW5zZXJ0TWFueSIsImEiLCJyZXN1bHQiLCJuIiwib3BzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxjQUFjQyxRQUFRLFNBQVIsRUFBbUJELFdBQXZDO0FBQ0EsTUFBTUUsU0FBU0QsUUFBUSxRQUFSLENBQWY7O0FBRUE7QUFDQSxNQUFNRSxNQUFNLDJCQUFaOztBQUVBO0FBQ0EsTUFBTUMsU0FBUyxXQUFmOztBQUVBO0FBQ0FKLFlBQVlLLE9BQVosQ0FBb0JGLEdBQXBCLEVBQXlCLFVBQVNHLEdBQVQsRUFBY0MsTUFBZCxFQUFzQjtBQUM3Q0wsU0FBT00sS0FBUCxDQUFhLElBQWIsRUFBbUJGLEdBQW5CO0FBQ0FHLFVBQVFDLEdBQVIsQ0FBWSxrQ0FBWjs7QUFFQSxRQUFNQyxLQUFLSixPQUFPSSxFQUFQLENBQVVQLE1BQVYsQ0FBWDs7QUFFQUcsU0FBT0ssS0FBUDtBQUNELENBUEQ7O0FBU0EsTUFBTUMsa0JBQWtCLFVBQVNGLEVBQVQsRUFBYUcsUUFBYixFQUF1QjtBQUM3QztBQUNBLFFBQU1DLGFBQWFKLEdBQUdJLFVBQUgsQ0FBYyxXQUFkLENBQW5CO0FBQ0E7QUFDQUEsYUFBV0MsVUFBWCxDQUFzQixDQUNwQixFQUFDQyxHQUFJLENBQUwsRUFEb0IsRUFDWCxFQUFDQSxHQUFJLENBQUwsRUFEVyxFQUNGLEVBQUNBLEdBQUksQ0FBTCxFQURFLENBQXRCLEVBRUcsVUFBU1gsR0FBVCxFQUFjWSxNQUFkLEVBQXNCO0FBQ3ZCaEIsV0FBT00sS0FBUCxDQUFhRixHQUFiLEVBQWtCLElBQWxCO0FBQ0FKLFdBQU9NLEtBQVAsQ0FBYSxDQUFiLEVBQWdCVSxPQUFPQSxNQUFQLENBQWNDLENBQTlCO0FBQ0FqQixXQUFPTSxLQUFQLENBQWEsQ0FBYixFQUFnQlUsT0FBT0UsR0FBUCxDQUFXQyxNQUEzQjtBQUNBWixZQUFRQyxHQUFSLENBQVksMENBQVo7QUFDQUksYUFBU0ksTUFBVDtBQUNELEdBUkQ7QUFTRCxDQWJEIiwiZmlsZSI6ImRhdGFiYXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTW9uZ29DbGllbnQgPSByZXF1aXJlKCdtb25nb2RiJykuTW9uZ29DbGllbnQ7XG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKTtcbiBcbi8vIENvbm5lY3Rpb24gVVJMXG5jb25zdCB1cmwgPSAnbW9uZ29kYjovL2xvY2FsaG9zdDoyNzAxNyc7XG4gXG4vLyBEYXRhYmFzZSBOYW1lXG5jb25zdCBkYk5hbWUgPSAnbXlwcm9qZWN0JztcbiBcbi8vIFVzZSBjb25uZWN0IG1ldGhvZCB0byBjb25uZWN0IHRvIHRoZSBzZXJ2ZXJcbk1vbmdvQ2xpZW50LmNvbm5lY3QodXJsLCBmdW5jdGlvbihlcnIsIGNsaWVudCkge1xuICBhc3NlcnQuZXF1YWwobnVsbCwgZXJyKTtcbiAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgc3VjY2Vzc2Z1bGx5IHRvIHNlcnZlclwiKTtcbiBcbiAgY29uc3QgZGIgPSBjbGllbnQuZGIoZGJOYW1lKTtcbiBcbiAgY2xpZW50LmNsb3NlKCk7XG59KTtcblxuY29uc3QgaW5zZXJ0RG9jdW1lbnRzID0gZnVuY3Rpb24oZGIsIGNhbGxiYWNrKSB7XG4gIC8vIEdldCB0aGUgZG9jdW1lbnRzIGNvbGxlY3Rpb25cbiAgY29uc3QgY29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ2RvY3VtZW50cycpO1xuICAvLyBJbnNlcnQgc29tZSBkb2N1bWVudHNcbiAgY29sbGVjdGlvbi5pbnNlcnRNYW55KFtcbiAgICB7YSA6IDF9LCB7YSA6IDJ9LCB7YSA6IDN9XG4gIF0sIGZ1bmN0aW9uKGVyciwgcmVzdWx0KSB7XG4gICAgYXNzZXJ0LmVxdWFsKGVyciwgbnVsbCk7XG4gICAgYXNzZXJ0LmVxdWFsKDMsIHJlc3VsdC5yZXN1bHQubik7XG4gICAgYXNzZXJ0LmVxdWFsKDMsIHJlc3VsdC5vcHMubGVuZ3RoKTtcbiAgICBjb25zb2xlLmxvZyhcIkluc2VydGVkIDMgZG9jdW1lbnRzIGludG8gdGhlIGNvbGxlY3Rpb25cIik7XG4gICAgY2FsbGJhY2socmVzdWx0KTtcbiAgfSk7XG59Il19