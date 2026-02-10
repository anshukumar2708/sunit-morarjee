# Quick Customization Guide

## 🎥 Add Your Own Videos

### Option 1: Use Local Videos (Recommended for Production)
1. Place your video files in the `public/` folder:
   ```
   public/
   ├── videos/
   │   ├── film1.mp4
   │   ├── film2.mp4
   │   └── film3.mp4
   ```

2. Update `page.tsx` filmHighlights:
   ```tsx
   const filmHighlights = [
     {
       title: 'Your Film Name',
       year: '2024',
       genre: 'Drama',
       description: 'Description here',
       thumbnail: 'https://images.unsplash.com/...', // Unsplash or your image
       videoUrl: '/videos/film1.mp4'  // Local video
     },
     // ... more films
   ];
   ```

### Option 2: Use External Video URLs
```tsx
videoUrl: 'https://example.com/video.mp4'  // Direct MP4 link
```

### Option 3: Use Unsplash Images
Browse [unsplash.com](https://unsplash.com) for cinema/film related images:
- Search: "film", "cinema", "actor", "movie", "production"
- Copy the image URL and add to thumbnail field

## 🎨 Styling Customization

### Change Play Button Color

**File:** [src/components/FilmCard.tsx](src/components/FilmCard.tsx)

Find this section:
```tsx
<div className="absolute inset-0 rounded-full bg-primary/20 group-hover:bg-primary/40 ...">
```

Change options:
- `primary` → Use your color class (e.g., `amber`, `blue`, `red`, `green`)
- `20/40` → Opacity (0-100)

Example for golden color:
```tsx
<div className="absolute inset-0 rounded-full bg-amber-500/30 group-hover:bg-amber-500/60 ...">
```

### Adjust Animation Speed

Find classes with `duration-` and modify the number:

**Zoom effect:**
```tsx
className="... transition-transform duration-500"
// Change 500 to: 200 (faster), 700 (slower)
```

**Overlay fade:**
```tsx
className="... transition-all duration-300"
```

### Change Modal Backdrop

**File:** [src/components/VideoModal.tsx](src/components/VideoModal.tsx)

```tsx
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm">
// Change:
// - black/80 → opacity (80 = 80% dark)
// - backdrop-blur-sm → blur-md or blur-lg for more blur
```

### Card Spacing

In [page.tsx](src/app/page.tsx) Film Highlights section:
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
// Change gap-6 to: gap-4 (smaller) or gap-8 (larger)
```

## 📸 Video Thumbnail Tips

1. **Size:** Use 16:9 aspect ratio for videos (400x225px minimum)
2. **Quality:** Use high-quality images (thumbnail shows before video plays)
3. **Consistency:** Use similar lighting/style across all thumbnails
4. **Text:** Avoid text on thumbnails if possible
5. **Face:** Include actor/subject for recognition

## 🎬 Video Format Notes

Supported formats:
- ✅ MP4 (H.264 codec) - Best compatibility
- ✅ WebM - For modern browsers
- ✅ OGV - Fallback option

Best practices:
- Compress videos before uploading (~5-20 MB per video)
- Use 1920x1080 or 1280x720 resolution
- Consider mobile users with slower connections

## 🔧 Update Film Data

Complete example with all options:

```tsx
const filmHighlights = [
  {
    title: 'Epic Drama 2024',
    year: '2024',
    genre: 'Drama',
    description: 'An unforgettable journey through the human condition',
    thumbnail: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=500&q=60',
    videoUrl: '/videos/epic-drama-2024.mp4'
  },
  {
    title: 'Thriller Night',
    year: '2023',
    genre: 'Thriller',
    description: 'A gripping tale of suspense and deception',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=500&q=60',
    videoUrl: '/videos/thriller-night.mp4'
  },
  {
    title: 'Romance Lost',
    year: '2023',
    genre: 'Romance',
    description: 'love transcends time and distance',
    thumbnail: 'https://images.unsplash.com/photo-1489599849228-ed4dc9ee47c3?auto=format&fit=crop&w=500&q=60',
    videoUrl: '/videos/romance-lost.mp4'
  },
  {
    title: 'Comedy Gold',
    year: '2022',
    genre: 'Comedy',
    description: 'Laugh out loud with witty dialogues',
    thumbnail: 'https://images.unsplash.com/photo-1517604931442-7e0c6cf2671d?auto=format&fit=crop&w=500&q=60',
    videoUrl: '/videos/comedy-gold.mp4'
  }
];
```

## ❌ Troubleshooting

### Video won't play
- Check video URL is accessible
- Ensure video format is MP4 or WebM
- Check CORS headers if video from external source
- Test video locally first

### Images not showing
- Verify image URL is valid
- Check image is public/accessible
- Try different image from Unsplash

### Modal not opening
- Check browser console for errors
- Verify VideoModal is imported in page.tsx
- Check isOpen state is being set correctly

### Styling looks off
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (npm run dev)
- Check Tailwind CSS classes are compiled

## 📱 Test Responsiveness

Open DevTools (F12) and test:
- **Mobile:** 375px width
- **Tablet:** 768px width
- **Desktop:** 1920px width

Text and buttons should scale proportionally.

## 🚀 Performance Tips

1. **Compress images** before using
   - Use tinypng.com or similar
   - Target: <200KB per image

2. **Optimize videos**
   - Use ffmpeg to compress
   - Target: 5-15 MB for short promotional videos

3. **Use Next.js Image optimization**
   - Already configured in FilmCard component
   - Automatic responsive sizing

4. **Lazy load videos**
   - Modal only loads video when opened
   - Saves bandwidth for users

## 📚 Additional Resources

- [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors)
- [Lucide Icons](https://lucide.dev/)
- [Next.js Image Component](https://nextjs.org/docs/app/api-reference/components/image)
- [Unsplash API](https://unsplash.com/api)

---

**Need help?** Check the main [FILMOGRAPHY_IMPLEMENTATION_GUIDE.md](FILMOGRAPHY_IMPLEMENTATION_GUIDE.md) for more details.
