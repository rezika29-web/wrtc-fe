import React, { useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import Text from 'components/Text'

export function TinyMCE() {
  const [editorContent, setEditorContent] = useState('')

  const handleEditorChange = (content: string) => {
    setEditorContent(content)
  }
  return (
    <div>
      <Text className="font-bold mb-3">Deskripsi</Text>
      <Editor
        apiKey="YOUR_API_KEY"
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image',
            'charmap print preview anchor help',
            'searchreplace visualblocks code',
            'insertdatetime media table paste wordcount',
          ],
          toolbar:
            'undo redo | formatselect | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent | help',
        }}
        value={editorContent}
        onEditorChange={handleEditorChange}
      />
      <div>
        <h2>Content Preview</h2>
        <div dangerouslySetInnerHTML={{ __html: editorContent }} />
      </div>
    </div>
  )
}

export default TinyMCE
