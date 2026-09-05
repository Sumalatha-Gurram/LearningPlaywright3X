enum Status {
    Pending = "PENDING",
    Approved = "APPROVED",
    Rejected = "REJECTED"
}

let currentStatus: Status = Status.Approved;

console.log(currentStatus);