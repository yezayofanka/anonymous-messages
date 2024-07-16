document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var message = document.getElementById('messageInput').value;
    if (message.trim() === '') {
        alert('Pesan tidak boleh kosong!');
        return;
    }
    
    // Simpan pesan ke backend (contoh: Firebase atau server lainnya)
    // Karena ini contoh sederhana, kita hanya akan menampilkan pesan sukses.
    
    document.getElementById('messageInput').value = '';
    document.getElementById('successMessage').classList.remove('hidden');
    
    setTimeout(function() {
        document.getElementById('successMessage').classList.add('hidden');
    }, 3000);
});
