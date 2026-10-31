# Akıllı Masa — Karaköy Güllüoğlu (v2)

Karaköy Güllüoğlu için hazırlanan mobil öncelikli, GitHub Pages üzerinde yayınlanabilir statik web demo projesi.

## Dosyalar

- `index.html` — Ana sayfa, Google Yorum, Instagram, hikâye bağlantısı ve yol tarifi.
- `menu.html` — Kategori filtreli ve aramalı dijital lezzet menüsü.
- `games.html` — Sürükle-bırak destekli Tatlı Crush ve isimli arkadaş çarkı.
- `loyalty.html` — İlk iki adımı otomatik dolu 8 adımlı Güllü Kulübü kartı.
- `feedback.html` — Yemeğin nasıldı? değerlendirmesi ve ayrı sorun bildirimi.
- `services.html` — Eski bağlantıların yeni ana sayfaya yönlendirilmesi.
- `styles.css` — Ortak renk paleti, bileşenler ve mobil görünüm.
- `app.js` — Menü filtreleri, oyunlar, çark, sadakat ve demo form işlemleri.
- `assets/karakoy-gulluoglu-logo.png` — Kullanıcının sağladığı logo.

## GitHub Pages'e yükleme

1. ZIP dosyasını bilgisayarında ayıkla.
2. `akilli-masa-gulluoglu-v2` klasörünün içindeki dosya ve klasörleri repository'nin köküne yükle. `index.html` doğrudan kök dizinde bulunmalı.
3. GitHub → **Settings → Pages** bölümünde `Deploy from a branch`, `main` ve `/ (root)` seçili olsun.
4. Yayınlanan adresi aç. NFC etiketinde ana sayfanın URL'sini kullan.

## v2 ile yapılan güncellemeler

- Eski koyu yeşil, krem ve altın renk paleti korundu; logo eklendi.
- Ana sayfadaki fiyat listesi kartı kaldırıldı; yerine 1843 / Hikâyemiz bağlantısı eklendi.
- Google Yorum, Instagram, Menü, resmî site ve Google Haritalar yol tarifi bağlantıları korundu.
- Menüde fiyat uydurulmadı. Güncel mağaza fiyatları için resmî mağaza menüsüne bağlantı eklendi.
- Eski kazı kazan modu çıkarıldı.
- Tatlı Crush taşları baklava, soğuk baklava, kadayıf, şöbiyet, cevizli baklava ve lokum temalı SVG çizimlerle yenilendi. Dokunarak seçme ve gerçek pointer sürükleme desteklenir; eşleşmelerde animasyon, puan ve hamle sayacı bulunur.
- Çark için hazır başlıklar, isim ekleme/silme, en az iki kişi kontrolü, dönüş animasyonu ve sonuç alanı eklendi. Merkezde 1843 vurgusu korundu.
- Güllü Kulübü kartı 8 adımlı. Yeni müşteri numarası için ilk 2 adım otomatik dolu gelir; kalan 6 adım soğuk baklava ödülüne ilerler.
- Cüzdana ekle butonu kaldırıldı.
- Personel iste / hesap iste / masa temizliği seçenekleri kaldırıldı; eski `services.html` adresi ana sayfaya yönlenir.
- "YEMEĞİN NASILDI? Önce bize söyle." alanı ve ayrı Sorun Bildir formu eklendi.

## Demo sınırları — yayına almadan önce bilin

Bu sürüm GitHub Pages üzerinde çalışan bir **ön yüz demosudur**:

- Sadakat kartı ve gönderilen geri bildirimler yalnızca ziyaretçinin mevcut tarayıcısında `localStorage` ile tutulur. Başka telefona taşınmaz ve işletmeye gönderilmez.
- İlk iki adım otomatik demo başlangıcıdır. Ziyaretlerin güvenli biçimde doğrulanması ve kalan damgaların eklenmesi için sunucu, müşteri kimliği ve işletme paneli gerekir.
- Geri bildirimlerin işletmeye ulaşması için güvenli API / veritabanı ve işletme paneli bağlantısı gerekir.
- Menü ürünleri demo sunum içeriğidir; anlık stok veya kesin ürün bulunurluğu iddiası taşımaz. Güncel fiyat bağlantısı resmî mağaza menüsüne gider.
- Google Yorum bağlantısı önceki GitHub sürümündeki Place ID ile korunmuştur. Yayına aldıktan sonra telefonda test edilmesi önerilir; Google oturum açma/yerel yönlendirme davranışına göre açılış farklı görünebilir.
- Çark eğlence amaçlı rastgele seçim yapar; gerçek ödül veya indirim taahhüdü oluşturmaz.

## Resmî bağlantılar

- Web: https://www.karakoygulluoglu.com/
- Hakkımızda: https://www.karakoygulluoglu.com/hakkimizda
- Menü / mağaza fiyatları: https://www.karakoygulluoglu.com/en/menu
- Instagram: https://www.instagram.com/karakoygulluoglu/
