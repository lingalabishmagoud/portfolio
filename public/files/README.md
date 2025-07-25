# Files Directory Structure

This directory contains all the assets for Lingala Bishma Goud's portfolio website.

## Directory Structure

```
files/
├── images/           # Project screenshots and portfolio images
├── certificates/     # Academic and professional certificates
├── documents/        # Additional documents and papers
└── resume/          # Resume files in different formats
```

## Usage Instructions

### Images (`/files/images/`)
- **Project Screenshots**: Add screenshots of your projects here
- **Profile Photos**: Professional headshots or profile pictures
- **Recommended formats**: JPG, PNG, WebP
- **Recommended size**: 1200x800px for project images, 400x400px for profile photos

**Example files to add:**
- `student-management-system.jpg` - Screenshot of your Student Management System
- `portfolio-website.jpg` - Screenshot of this portfolio
- `profile-photo.jpg` - Your professional photo

### Certificates (`/files/certificates/`)
- **Academic Certificates**: Degree certificates, transcripts
- **Professional Certifications**: Google Cybersecurity, course completions
- **Workshop Certificates**: Certificates from workshops you've attended or organized
- **Recommended formats**: PDF, JPG, PNG

**Example files to add:**
- `google-cybersecurity-certificate.pdf`
- `btech-degree-certificate.pdf`
- `intermediate-certificate.pdf`
- `workshop-certificates.pdf`

### Documents (`/files/documents/`)
- **Project Documentation**: Technical documentation, project reports
- **Academic Papers**: Research papers, assignments
- **Letters of Recommendation**: Reference letters
- **Recommended formats**: PDF, DOC, DOCX

### Resume (`/files/resume/`)
- **Resume Files**: Different versions and formats of your resume
- **Recommended formats**: PDF (primary), DOC, DOCX

**Example files to add:**
- `lingala-bishma-goud-resume.pdf`
- `lingala-bishma-goud-resume-detailed.pdf`
- `lingala-bishma-goud-cv.pdf`

## How to Use in Portfolio

### In Components
To reference files in your portfolio components, use the path starting with `/files/`:

```jsx
// For images
<img src="/files/images/student-management-system.jpg" alt="Student Management System" />

// For downloads
<a href="/files/resume/lingala-bishma-goud-resume.pdf" download>Download Resume</a>

// For certificates
<a href="/files/certificates/google-cybersecurity-certificate.pdf" target="_blank">
  View Certificate
</a>
```

### File Naming Convention
- Use lowercase letters
- Use hyphens (-) instead of spaces
- Be descriptive but concise
- Include your name in important documents

**Good examples:**
- `lingala-bishma-goud-profile-photo.jpg`
- `student-management-dashboard.png`
- `google-cybersecurity-foundation-certificate.pdf`

**Avoid:**
- `IMG_001.jpg`
- `Certificate 1.pdf`
- `My Project Screenshot.png`

## Git and Hosting

### For GitHub
- All files in this directory will be committed to your repository
- Keep file sizes reasonable (< 5MB per file)
- Consider using Git LFS for large files if needed

### For Hosting (Vercel/Netlify)
- Files will be served statically from the `/files/` path
- Optimize images for web (compress JPGs, use WebP when possible)
- Ensure file names don't contain special characters

## Security Notes

- **Don't include sensitive information** in publicly accessible files
- **Personal documents**: Only include what you're comfortable sharing publicly
- **Certificates**: Ensure they don't contain sensitive personal information beyond what's already in your portfolio

## Optimization Tips

1. **Compress images** before uploading to reduce load times
2. **Use appropriate formats**: JPG for photos, PNG for graphics with transparency
3. **Consider WebP format** for better compression
4. **Optimize PDFs** to reduce file size

---

**Last Updated**: January 2025
**Portfolio Owner**: Lingala Bishma Goud
**Contact**: bishmagoud321@gmail.com
