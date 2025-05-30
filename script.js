document.addEventListener('DOMContentLoaded', () => {
    const teamMembers = document.querySelectorAll('.team-member');
    const detailButtons = document.querySelectorAll('.detail-btn');

    detailButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent card click event
            const member = button.parentElement;
            member.classList.toggle('active');

            // Close other open members
            teamMembers.forEach(otherMember => {
                if (otherMember !== member) {
                    otherMember.classList.remove('active');
                }
            });
        });
    });

    // Close details when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.team-member')) {
            teamMembers.forEach(member => {
                member.classList.remove('active');
            });
        }
    });
});