
	
	
        document.addEventListener('DOMContentLoaded', function() {
            // Dokunma hareketlerini engelleme
            document.addEventListener('touchstart', function(event) {
                if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'BUTTON' && event.target.tagName !== 'TEXTAREA') {
                    event.preventDefault();
                }
            }, { passive: false });

            // Dokunma kaydırma olaylarını engelleme
            document.addEventListener('touchmove', function(event) {
                event.preventDefault();
            }, { passive: false });

            // URL'deki hata mesajını kontrol et ve göster
            const params = new URLSearchParams(window.location.search);
            const error = params.get('error');
            const errorMessage = document.getElementById('error-message');
            
            if (error) {
                switch (error) {
                    case 'account_locked':
                        errorMessage.textContent = 'Bu hesap pasif durumdadır.';
                        break;
                    case 'invalid_credentials':
                        errorMessage.textContent = 'Geçersiz kullanıcı adı veya parola.';
                        break;
                    case 'server':
                        errorMessage.textContent = 'Sunucu hatası. Lütfen daha sonra tekrar deneyin.';
                        break;
                    case 'access_denied':
                        errorMessage.textContent = 'Erişim reddedildi.';
                        break;
                    case 'invalid_request':
                        errorMessage.textContent = 'Geçersiz istek.';
                        break;
                    default:
                        errorMessage.textContent = 'Bilinmeyen bir hata oluştu.';
                }
                errorMessage.style.display = 'block';
                setTimeout(() => {
                    errorMessage.style.display = 'none';
                }, 2500); // 2.5 saniye sonra hata mesajını gizle
            }
        });
			
			
			// Dokunma hareketlerini engelleme
document.addEventListener('touchstart', function(event) {
    // Tıklanan öğe bir input veya textarea değilse ve sayfada başka bir yerde bir dokunma olursa,
    // bunu engellemek için preventDefault() yöntemini kullanırız.
    if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'BUTTON' && event.target.tagName !== 'TEXTAREA') {
        event.preventDefault();
    }
}, { passive: false });

// Dokunma kaydırma olaylarını engelleme
document.addEventListener('touchmove', function(event) {
    event.preventDefault();
}, { passive: false });
	
	
	
	

const logoContainer = document.getElementById('logo-container');
const logo2 = document.getElementById('logo2');


logoContainer.addEventListener('mouseover', () => {
    
    logo2.style.opacity = 1; // Logo2'yi görünür yap
});

logoContainer.addEventListener('mouseout', () => {
    logo2.style.opacity = 0; // Logo2'yi görünmez yap
});
	
