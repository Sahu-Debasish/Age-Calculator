document.getElementById("calculateButton").addEventListener("click", () => {
    const birthDate = new Date(document.getElementById("birthDate").value);
    const today = new Date();
    
    const years = today.getFullYear() - birthDate.getFullYear();
    const months = today.getMonth() - birthDate.getMonth();
    const days = today.getDate() - birthDate.getDate();

    // Check if the birth date has not occurred yet this year
    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    document.getElementById("result").textContent = `Your age is approximately ${years} years, ${months} months, and ${days} days.`;
});
