$(".menu").click(function () {
  const wt = $(".navbar").innerWidth();

  $(".navbar").animate(
    {
      left: `+=250px`,
    },
    "slow"
  );
  $(".navbar-list").animate(
    {
      left: `+=250px`,
    },
    "slow"
  );
});
$(".close-button").click(function () {
  $(".navbar").animate(
    {
      left: `-=250px`,
    },
    "slow"
  );
});
$(".sing h3").click(function () {
  $(this).next().slideToggle(500);
  $(".sing div").not($(this).next()).slideUp(500);
});
let counter = 100;
$(".reamining span").text(counter);
$("form textarea").keypress(function () {
  if (counter !== 0) {
    --counter;
    $(".reamining span").text(counter);
  }
  if (counter === 0) {
    $(".reamining span")
      .text("your available character finished ")
      .css("color", "red");
  }
});
const countdown = () => {
  const countDate = new Date("October 25,2023 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);
  $(".time .day").html(textDay + " D");
  $(".time .hour").html(textHour + " h");
  $(".time .minute").html(textMinute + " m");
  $(".time .second").html(textSecond + " s");
};

setInterval(countdown, 1000);
