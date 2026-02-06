// Common utility functions for all pages

// Get all leaves from localStorage
function getLeaves() {
    const leaves = localStorage.getItem('leaves');
    return leaves ? JSON.parse(leaves) : [];
}

// Save a new leave to localStorage
function saveLeave(leave) {
    const leaves = getLeaves();
    leaves.push(leave);
    localStorage.setItem('leaves', JSON.stringify(leaves));
}

// Update leave status (Approve/Reject)
function updateLeaveStatus(id, status) {
    const leaves = getLeaves();
    const index = leaves.findIndex(leave => leave.id === id);
    
    if (index !== -1) {
        leaves[index].status = status;
        localStorage.setItem('leaves', JSON.stringify(leaves));
        return true;
    }
    
    return false;
}

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Add sample data if localStorage is empty
function initializeSampleData() {
    const leaves = getLeaves();
    
    if (leaves.length === 0) {
        const sampleLeaves = [
            {
                id: 1,
                employeeName: "Rahul Sharma",
                leaveType: "Sick",
                fromDate: "2024-01-15",
                toDate: "2024-01-16",
                reason: "High fever and cold",
                status: "Approved"
            },
            {
                id: 2,
                employeeName: "Priya Singh",
                leaveType: "Casual",
                fromDate: "2024-01-20",
                toDate: "2024-01-21",
                reason: "Family function",
                status: "Pending"
            },
            {
                id: 3,
                employeeName: "Amit Kumar",
                leaveType: "Paid",
                fromDate: "2024-01-25",
                toDate: "2024-01-27",
                reason: "Vacation with family",
                status: "Rejected"
            },
            {
                id: 4,
                employeeName: "Rahul Sharma",
                leaveType: "Emergency",
                fromDate: "2024-02-01",
                toDate: "2024-02-01",
                reason: "Medical emergency",
                status: "Approved"
            }
        ];
        
        localStorage.setItem('leaves', JSON.stringify(sampleLeaves));
    }
}

// Initialize sample data when the page loads
window.addEventListener('DOMContentLoaded', function() {
    initializeSampleData();
});