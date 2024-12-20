import React from "react";

export default function Statistics({
  statisticsIcon1,
  statisticsIcon2,
  statisticsIcon3,
  head1,
  head2,
  head3,
  num1,
  num2,
  num3,
}) {
  return (
    <div>
      <div className="titlePage">Statistics</div>
      <div class="container mt-5">
        <div class="row mb-5">
          <div class="col-md-4">
            <div class="card text-center">
              <div class="card-body">
                {statisticsIcon1}
                <h5 class="card-title">{head1}</h5>
                <p class="card-text display-4">{num1}</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-center">
              <div class="card-body">
                {statisticsIcon2}
                <h5 class="card-title">{head2}</h5>
                <p class="card-text display-4">{num2}</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-center">
              <div class="card-body">
                {statisticsIcon3}
                <h5 class="card-title">{head3}</h5>
                <p class="card-text display-4">{num3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
