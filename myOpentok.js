var apiKey = '45239802';
var sessionId = '1_MX40NTIzOTgwMn5-MTQzMjAzMjQ5OTk3NH56MTZ6Ri8wYTluZkhwRTV2WVZXc0Q3dWZ-fg'; 
var token = 'T1==cGFydG5lcl9pZD00NTIzOTgwMiZzaWc9NzgwZjM3ZjZjZDhmZjk2M2RiZTRkZTcwY2VkOWY2YjJkMDU0NGU0ODpyb2xlPXB1Ymxpc2hlciZzZXNzaW9uX2lkPTFfTVg0ME5USXpPVGd3TW41LU1UUXpNakF6TWpRNU9UazNOSDU2TVRaNlJpOHdZVGx1Wmtod1JUVjJXVlpYYzBRM2RXWi1mZyZjcmVhdGVfdGltZT0xNDMyMDMzMzU5Jm5vbmNlPTAuOTkxOTI2OTc5MTU4NjcwNSZleHBpcmVfdGltZT0xNDMyMTE5NzU5';
var session = OT.initSession(apiKey, sessionId); 
session.on({ 
    streamCreated: function(event) { 
      console.log(event);
      console.log("Stream: "+event.stream);
      session.subscribe(event.stream, 'subscribersDiv', {insertMode: 'append'}); 
    } 
}); 
session.connect(token, function(error) {
  console.log("TOKEN: "+token);
  if (error) {
    console.log(error.message);
  } else {
    session.publish('myPublisherDiv', {width: 320, height: 240}); 
  }
});