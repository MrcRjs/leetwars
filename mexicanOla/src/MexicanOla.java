public class MexicanOla {
    public static String[] wave(String str) {

        // Result array should have string without spaces length
        int alphaCount = str.replaceAll("\\s","").length();
        String [] result = new String[alphaCount];

        int wordLength = str.length();

        // Used to have a count on how many spaces are in the string
        int deltaSpace = 0;

        for (int i = 0; i < wordLength; i++)
        {
            // The actual element index in result
            int count = i - deltaSpace;

            // If current char is a space, add 1 to delta
            if (str.charAt(i) == ' ')
            {
                deltaSpace += 1;
            }
            else
            {
                // Set uppercase char at str[i] and push it to result
                String waveWord = str.substring(0, i) + str.substring(i, i + 1).toUpperCase() + str.substring(i + 1, wordLength);
                result[count] = waveWord;
            }
        }
        return result;
    }
}
