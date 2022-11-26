[kushal@fedora angularfifteen]$ 
[kushal@fedora angularfifteen]$ 
[kushal@fedora angularfifteen]$ cd /run/media/kushal/Elements/shared/thinkpadx/zte/timelapse-2022-11-24; pwd; cd oc/; date; time ffmpeg -r 60 -pattern_type glob -i "*.jpg" -vf scale=-2:2448 ../timelapse-2022-11-24-60a.mkv; date;
/run/media/kushal/Elements/shared/thinkpadx/zte/timelapse-2022-11-24
Thu Nov 24 10:04:18 PM EST 2022
ffmpeg version 5.1.2 Copyright (c) 2000-2022 the FFmpeg developers
  built with gcc 12 (GCC)
  configuration: --prefix=/usr --bindir=/usr/bin --datadir=/usr/share/ffmpeg --docdir=/usr/share/doc/ffmpeg --incdir=/usr/include/ffmpeg --libdir=/usr/lib64 --mandir=/usr/share/man --arch=x86_64 --optflags='-O2 -flto=auto -ffat-lto-objects -fexceptions -g -grecord-gcc-switches -pipe -Wall -Werror=format-security -Wp,-D_FORTIFY_SOURCE=2 -Wp,-D_GLIBCXX_ASSERTIONS -specs=/usr/lib/rpm/redhat/redhat-hardened-cc1 -fstack-protector-strong -specs=/usr/lib/rpm/redhat/redhat-annobin-cc1 -m64 -mtune=generic -fasynchronous-unwind-tables -fstack-clash-protection -fcf-protection' --extra-ldflags='-Wl,-z,relro -Wl,--as-needed -Wl,-z,now -specs=/usr/lib/rpm/redhat/redhat-hardened-ld -specs=/usr/lib/rpm/redhat/redhat-annobin-cc1 -Wl,--build-id=sha1 -specs=/usr/lib/rpm/redhat/redhat-package-notes' --disable-htmlpages --enable-pic --disable-stripping --enable-shared --disable-static --enable-gpl --enable-version3 --enable-libsmbclient --disable-openssl --enable-bzlib --enable-frei0r --enable-chromaprint --enable-gcrypt --enable-gnutls --enable-ladspa --enable-libshaderc --enable-vulkan --disable-cuda-sdk --enable-libaom --enable-libass --enable-libbluray --enable-libbs2b --enable-libcdio --enable-libcodec2 --enable-libdav1d --enable-libdc1394 --enable-libdrm --enable-libfdk-aac --enable-libfontconfig --enable-libfreetype --enable-libfribidi --enable-libgsm --enable-libilbc --enable-libjack --enable-libjxl --enable-libmodplug --enable-libmp3lame --enable-libmysofa --enable-libopenh264-dlopen --enable-libopenjpeg --enable-libopenmpt --enable-libopus --enable-libpulse --enable-librav1e --enable-librsvg --enable-librubberband --enable-libsnappy --enable-libsvtav1 --enable-libsoxr --enable-libspeex --enable-libssh --enable-libsrt --enable-libtesseract --enable-libtheora --enable-libtwolame --enable-libvidstab --enable-libvmaf --enable-libvorbis --enable-libv4l2 --enable-libvpx --enable-libwebp --enable-libxml2 --enable-libzimg --enable-libzmq --enable-libzvbi --enable-lto --enable-libmfx --enable-vaapi --enable-vdpau --enable-openal --enable-opencl --enable-opengl --enable-pthreads --enable-vapoursynth --enable-muxers --enable-demuxers --enable-hwaccels --disable-encoders --disable-decoders --disable-decoder='mpeg4,h263,h264,hevc,vc1' --enable-encoder=',libfdk_aac,ac3,apng,ass,ayuv,bmp,ffv1,ffvhuff,flac,gif,h263_v4l2m2m,h264_amf,h264_nvenc,h264_qsv,h264_v4l2m2m,h264_vaapi,hevc_amf,hevc_nvenc,hevc_qsv,hevc_v4l2m2m,hevc_vaapi,huffyuv,ilbc,jpegls,jpeg2000,libaom,libaom_av1,libcodec2,libgsm,libilbc,libjxl,libmp3lame,libopenh264,libopenjpeg,libopus,librav1e,libschroedinger,libspeex,libsvtav1,libtheora,libtwolame,libvorbis,libvpx_vp8,libvpx_vp9,libwebp,libwebp_anim,mjpeg,mjpeg_qsv,mjpeg_vaapi,mp2,mp2fixed,mpeg1video,mpeg2video,mpeg2_qsv,mpeg2_vaapi,mpeg4_v4l2m2m,opus,pam,pbm,pcm_alaw,pcm_f32be,pcm_f32le,pcm_f64be,pcm_f64le,pcm_mulaw,pcm_s16be,pcm_s16be_planar,pcm_s16le,pcm_s16le_planar,pcm_s24be,pcm_s24le,pcm_s24le_planar,pcm_s32be,pcm_s32le,pcm_s32le_planar,pcm_s8,pcm_s8_planar,pcm_u16be,pcm_u16le,pcm_u24be,pcm_u24le,pcm_u32be,pcm_u32le,pcm_u8,pcx,pgm,pgmyuv,png,ppm,rawvideo,sgi,srt,ssa,sunrast,targa,text,tiff,v210,v308,v408,v410,vc1_qsv,vc1_v4l2m2m,vorbis,vp8_qsv,vp8_v4l2m2m,vp8_vaapi,vp9_qsv,vp9_vaapi,webvtt,wrapped_avframe,xbm,xwd,y41p,yuv4,zlib,' --enable-decoder=',libfdk_aac,ac3,ansi,apng,ass,av1_qsv,ayuv,bmp,dirac,exr,ffv1,ffvhuff,ffwavesynth,flac,gif,gsm,huffyuv,ilbc,jpeg2000,libaom,libaom_av1,libcodec2,libdav1d,libgsm,libilbc,libjxl,libopenh264,libopenjpeg,libopus,libschroedinger,libspeex,libvorbis,libvpx_vp8,libvpx_vp9,mjpeg,mjpeg_qsv,mp1,mp1float,mp2,mp2float,mp3,mp3float,mpeg1video,mpeg1_v4l2m2m,mpeg2video,mpeg2_qsv,mpeg2_v4l2m2m,opus,pam,pbm,pcm_alaw,pcm_bluray,pcm_dvd,pcm_f32be,pcm_f32le,pcm_f64be,pcm_f64le,pcm_mulaw,pcm_s16be,pcm_s16be_planar,pcm_s16le,pcm_s16le_planar,pcm_s24be,pcm_s24le,pcm_s24le_planar,pcm_s32be,pcm_s32le,pcm_s32le_planar,pcm_s8,pcm_s8_planar,pcm_u16be,pcm_u16le,pcm_u24be,pcm_u24le,pcm_u32be,pcm_u32le,pcm_u8,pcx,pgm,pgmyuv,pgssub,pgx,png,ppm,rawvideo,sgi,srt,ssa,sunrast,targa,text,theora,tiff,v210,v210x,v308,v408,v410,vorbis,vp3,vp5,vp6,vp6a,vp6f,vp8,vp8_qsv,vp8_v4l2m2m,vp9,vp9_qsv,vp9_v4l2m2m,webp,webvtt,wrapped_avframe,xbm,xwd,y41p,yuv4,zlib,'
  libavutil      57. 28.100 / 57. 28.100
  libavcodec     59. 37.100 / 59. 37.100
  libavformat    59. 27.100 / 59. 27.100
  libavdevice    59.  7.100 / 59.  7.100
  libavfilter     8. 44.100 /  8. 44.100
  libswscale      6.  7.100 /  6.  7.100
  libswresample   4.  7.100 /  4.  7.100
  libpostproc    56.  6.100 / 56.  6.100
Input #0, image2, from '*.jpg':
  Duration: 00:13:08.20, start: 0.000000, bitrate: N/A
  Stream #0:0: Video: mjpeg (Baseline), yuvj420p(pc, bt470bg/unknown/unknown), 3264x2448 [SAR 1:1 DAR 4:3], 25 fps, 25 tbr, 25 tbn
Stream mapping:
  Stream #0:0 -> #0:0 (mjpeg (native) -> vp9 (libvpx-vp9))
Press [q] to stop, [?] for help
[swscaler @ 0x5597ffe7e300] [swscaler @ 0x5597ffe8c940] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe7e300] [swscaler @ 0x55980003ad80] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe7e300] [swscaler @ 0x5598000a9e00] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe7e300] [swscaler @ 0x559800118e80] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe7e300] [swscaler @ 0x559800187f00] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe7e300] [swscaler @ 0x5598001f6f80] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe7e300] [swscaler @ 0x559800266000] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe7e300] [swscaler @ 0x5598002d5080] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe7e300] [swscaler @ 0x559800344100] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe8c940] [swscaler @ 0x55980028e300] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe8c940] [swscaler @ 0x5598002a6bc0] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe8c940] [swscaler @ 0x559800018c00] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe8c940] [swscaler @ 0x559800099c80] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe8c940] [swscaler @ 0x559800247700] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe8c940] [swscaler @ 0x5598001d5480] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe8c940] [swscaler @ 0x55980010bf00] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe8c940] [swscaler @ 0x55980017af80] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe8c940] [swscaler @ 0x559800349a40] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5598000d3780] [swscaler @ 0x55980028e300] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5598000d3780] [swscaler @ 0x55980029f880] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5598000d3780] [swscaler @ 0x55980007e1c0] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5598000d3780] [swscaler @ 0x55980001c000] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5598000d3780] [swscaler @ 0x559800247700] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5598000d3780] [swscaler @ 0x5598001d88c0] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5598000d3780] [swscaler @ 0x55980010bf00] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5598000d3780] [swscaler @ 0x55980017d5c0] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5598000d3780] [swscaler @ 0x55980034a700] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe8c940] [swscaler @ 0x5598000d3780] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe8c940] [swscaler @ 0x55980029f880] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe8c940] [swscaler @ 0x55980007e1c0] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe8c940] [swscaler @ 0x55980001c000] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe8c940] [swscaler @ 0x559800247700] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe8c940] [swscaler @ 0x5598001d88c0] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe8c940] [swscaler @ 0x55980010bf00] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe8c940] [swscaler @ 0x55980017d5c0] deprecated pixel format used, make sure you did set range correctly
[swscaler @ 0x5597ffe8c940] [swscaler @ 0x55980034a700] deprecated pixel format used, make sure you did set range correctly
[libvpx-vp9 @ 0x5597ffe2c780] v1.12.0
[libvpx-vp9 @ 0x5597ffe2c780] Neither bitrate nor constrained quality specified, using default CRF of 32
Output #0, matroska, to '../timelapse-2022-11-24-60a.mkv':
  Metadata:
    encoder         : Lavf59.27.100
  Stream #0:0: Video: vp9 (VP90 / 0x30395056), yuv420p(tv, bt470bg/unknown/unknown, progressive), 3264x2448 [SAR 1:1 DAR 4:3], q=2-31, 60 fps, 1k tbn
    Metadata:
      encoder         : Lavc59.37.100 libvpx-vp9
    Side data:
      cpb: bitrate max/min/avg: 0/0/0 buffer size: 0 vbv_delay: N/A
[mjpeg @ 0x5597ffde6b40] overread 858560kB time=00:05:26.46 bitrate=106859.2kbits/s speed=0.00644x    
[mjpeg @ 0x5597ffde6b40] EOI missing, emulating
frame=19614 fps=0.4 q=32.0 Lsize= 4265722kB time=00:05:26.88 bitrate=106902.7kbits/s speed=0.00644x    
video:4265549kB audio:0kB subtitle:0kB other streams:0kB global headers:0kB muxing overhead: 0.004047%

real	846m32.708s
user	4476m25.038s
sys	11m13.774s
Fri Nov 25 12:10:51 PM EST 2022
[kushal@fedora oc]$ 
