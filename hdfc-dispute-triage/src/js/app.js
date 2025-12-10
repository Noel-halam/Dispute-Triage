function runTriage() {
    const txt = (document.getElementById('complaint').value || '').toLowerCase();
    const amount = Number(document.getElementById('amount').value || 0);
    const risk = Number(document.getElementById('risk').value || 0);

    let priority = 'Low', slaHours = 72, cls = 'low', message = 'We will respond within 72 hours.';
    if (amount >= 50000 || risk === 1) {
        priority = 'High';
        slaHours = 2;
        cls = 'high';
        message = 'We are investigating immediately. Expect update within 2 hours.';
    } else if (txt.includes('fraud') || txt.includes('unauthorised') || txt.includes('unauthorized') || txt.includes('stolen') || txt.includes('unauth')) {
        priority = 'High';
        slaHours = 2;
        cls = 'high';
        message = 'We are investigating immediately. Expect update within 2 hours.';
    } else if (amount >= 5000 || txt.includes('refund') || txt.includes('failed') || txt.includes('delay')) {
        priority = 'Medium';
        slaHours = 24;
        cls = 'med';
        message = 'We will get back within 24 hours.';
    }

    const deadline = new Date(Date.now() + slaHours * 3600 * 1000).toLocaleString();
    const out = document.getElementById('out');
    out.style.display = 'block';
    out.className = 'result ' + (cls);
    out.innerHTML = `<strong>Priority:</strong> ${priority}<br><strong>SLA:</strong> Respond within ${slaHours} hours<br><strong>Deadline:</strong> ${deadline}<br><p style="margin-top:8px">${message}</p>`;
}