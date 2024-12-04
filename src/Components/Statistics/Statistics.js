import React from "react";

export default function Statistics() {
  return (
    <div>
      <div className="titlePage">Statistics</div>
      <div class="container mt-5">
        <div class="row mb-5">
          <div class="col-md-4">
            <div class="card text-center">
              <div class="card-body">
                <i class="fas fa-envelope fa-3x text-primary mb-3"></i>
                <h5 class="card-title">Messages</h5>
                <p class="card-text display-4">25</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-center">
              <div class="card-body">
                <i class="fas fa-shopping-cart fa-3x text-success mb-3"></i>
                <h5 class="card-title">Sales</h5>
                <p class="card-text display-4">150</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card text-center">
              <div class="card-body">
                <i class="fas fa-car fa-3x text-danger mb-3"></i>
                <h5 class="card-title">Cars</h5>
                <p class="card-text display-4">50</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
