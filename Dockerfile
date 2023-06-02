# Gunakan image PHP sebagai dasar
FROM php:latest

# Set folder kerja di dalam container
WORKDIR /var/www/html

# Salin file-filenya ke folder kerja di dalam container
COPY . /var/www/html

# Pasang dependensi yang dibutuhkan
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libmcrypt-dev \
    libxml2-dev \
    libzip-dev \
    zip \
    unzip

# Install ekstensi PHP yang diperlukan
RUN docker-php-ext-install \
    gd \
    mysqli \
    pdo_mysql \
    soap \
    zip

# Expose port yang digunakan oleh aplikasi PHP
EXPOSE 80

# Perintah untuk menjalankan server PHP (misalnya Apache)
CMD ["php", "-S", "0.0.0.0:80"]
