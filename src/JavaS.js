console.log("Start");

function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log("Now We have Data");
    callback({ userEmail: email });
  }, 3000);
}

function getUsrVideos(email, callback) {
  setTimeout(() => {
    callback(["video1", "video2", "video3", "video4"]);
  }, 2000);
}

function videoDetails(video, callback) {
  setTimeout(() => {
    callback("title of the video");
  }, 2000);
}

const user = loginUser("aditya@in", 12345, (user) => {
  console.log(user);
  getUsrVideos(user.userEmail, (videos) => {
    console.log(videos);
    videoDetails(videos[0], (title) => {
      console.log(title);
    });
  });
});
console.log(user);

console.log("End");

setTimeout(() => {
  console.log("testing");
}, 3000);
